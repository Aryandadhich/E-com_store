//this code define custom exception handling middleware to globally handel any exception
//that may occur during the process of HTTP request 


//insted of having try catch block scattered everywhere ...
//we create a centralized middleware that can c atch exception

using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

namespace API.Middleware
{
    public class ExceptionMiddleWare
    {
        readonly RequestDelegate _next;

        readonly ILogger<ExceptionMiddleWare> _logger;
        
        private readonly IHostEnvironment _env;
        public ExceptionMiddleWare(RequestDelegate next,ILogger<ExceptionMiddleWare>  logger, IHostEnvironment env)
        {
                _env = env;
                _next = next;
                _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try{
                await _next(context);
            }
            catch(Exception ex)
            {
                _logger.LogError(ex,ex.Message);
                context.Response.ContentType = "application/json";
                context.Response.StatusCode = 500;

                var Response = new ProblemDetails
                {
                    Status = 500,
                    Detail = _env.IsDevelopment() ? ex.StackTrace.ToString() : null,
                    Title = ex.Message
                };
                var options = new JsonSerializerOptions{PropertyNamingPolicy = JsonNamingPolicy.CamelCase};

                var json = JsonSerializer.Serialize(Response, options);

                await context.Response.WriteAsync(json);
            }

        }
    }
}