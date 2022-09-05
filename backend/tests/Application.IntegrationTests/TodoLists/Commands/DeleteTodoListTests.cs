/*
using FluentAssertions;
using Munin.Application.Common.Exceptions;
using Munin.Application.TodoLists.Commands.CreateTodoList;
using Munin.Application.TodoLists.Commands.DeleteTodoList;
using Munin.Domain.Entities;
using NUnit.Framework;

namespace Munin.Application.IntegrationTests.TodoLists.Commands;

using static Testing;

public class DeleteTodoListTests : BaseTestFixture
{
    [Test]
    public async Task ShouldRequireValidTodoListId()
    {
        var command = new DeleteTodoListCommand(99);
        await FluentActions.Invoking(() => SendAsync(command)).Should().ThrowAsync<NotFoundException>();
    }

    [Test]
    public async Task ShouldDeleteTodoList()
    {
        var listId = await SendAsync(new CreateTodoListCommand
        {
            Title = "New List"
        });

        await SendAsync(new DeleteTodoListCommand(listId));

        var list = await FindAsync<TodoList>(listId);

        list.Should().BeNull();
    }
}
*/
