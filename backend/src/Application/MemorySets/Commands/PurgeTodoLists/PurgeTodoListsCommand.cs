using MediatR;
using Munin.Application.Common.Interfaces;
using Munin.Application.Common.Security;

namespace Munin.Application.TodoLists.Commands.PurgeTodoLists;

[Authorize(Roles = "Administrator")]
[Authorize(Policy = "CanPurge")]
public record PurgeTodoListsCommand : IRequest;

public class PurgeTodoListsCommandHandler : IRequestHandler<PurgeTodoListsCommand>
{
    private readonly IApplicationDbContext _context;

    public PurgeTodoListsCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<Unit> Handle(PurgeTodoListsCommand request, CancellationToken cancellationToken)
    {
        _context.MemorySets.RemoveRange(_context.MemorySets);

        await _context.SaveChangesAsync(cancellationToken);

        return Unit.Value;
    }
}
