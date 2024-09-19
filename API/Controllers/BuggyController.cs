using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        [HttpGet("Not-found")]
        public ActionResult GetNotFound()
        {
            return NotFound();
        }
         [HttpGet("bad-request")]
        public ActionResult GetBadRequest()
        {
            return BadRequest(new ProblemDetails{Title = "this is bad request"});
        }
         [HttpGet("unauthorised")]
        public ActionResult GetUnauthorised()
        {
            return Unauthorized();
        }
         [HttpGet("validation error")]
        public ActionResult GetValidationError()
        {
           ModelState.AddModelError("problem1", "this is the first error");
            ModelState.AddModelError("problem2", "this is the second error");
            return ValidationProblem();
        }  
         [HttpGet("server-error")]
        public ActionResult GetServerError()
        {
            throw new Exception("this is server error");
        }


    }
}