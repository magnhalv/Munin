using Munin.Application.TodoLists.Queries.ExportTodos;

namespace Munin.Application.Common.Interfaces;

public interface ICsvFileBuilder
{
    byte[] BuildTodoItemsFile(IEnumerable<TodoItemRecord> records);
}
