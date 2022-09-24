using Microsoft.AspNetCore.Mvc;
using Munin.Application.TodoItems.Queries.GetTodoItemsWithPagination;

namespace Munin.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HealthCheckController : ControllerBase
{
    [HttpGet]
    public HealthCheck Get()
    {
        var hc = new HealthCheck()
        {
            Status = "Ok"
        };
        return hc;
    }

    public class HealthCheck
    {
        public string Status { get; set; }
    }
}