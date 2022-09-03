using Munin.Application.Common.Mappings;
using Munin.Domain.Entities;

namespace Munin.Application.TodoLists.Queries.GetTodos;

public class MemorySetDto : IMapFrom<MemorySet>
{
    public MemorySetDto()
    {
        //Items = new List<TodoItemDto>();
    }

    public int Id { get; set; }

    public string? Title { get; set; }
}
