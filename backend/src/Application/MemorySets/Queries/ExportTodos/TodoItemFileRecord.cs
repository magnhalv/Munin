using Munin.Application.Common.Mappings;
using Munin.Domain.Entities;

namespace Munin.Application.TodoLists.Queries.ExportTodos;

public class TodoItemRecord : IMapFrom<TodoItem>
{
    public string? Title { get; set; }

    public bool Done { get; set; }
}
