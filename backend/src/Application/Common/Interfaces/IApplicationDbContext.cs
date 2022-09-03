using Microsoft.EntityFrameworkCore;
using Munin.Domain.Entities;

namespace Munin.Application.Common.Interfaces;

public interface IApplicationDbContext
{
    DbSet<MemorySet> MemorySets { get; }

    DbSet<TodoItem> TodoItems { get; }

    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}
