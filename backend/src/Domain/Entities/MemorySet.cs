using Munin.Domain.Common;
using Munin.Domain.ValueObjects;

namespace Munin.Domain.Entities;

public class MemorySet : BaseAuditableEntity
{
    public string? Title { get; set; }
}
