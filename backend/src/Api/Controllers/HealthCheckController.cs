using Microsoft.AspNetCore.Mvc;
using Munin.Application.TodoItems.Queries.GetTodoItemsWithPagination;

namespace Munin.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HealthCheckController : ControllerBase
{
    [HttpGet]
    public string Get()
    {
        return "Ok";
    }
}