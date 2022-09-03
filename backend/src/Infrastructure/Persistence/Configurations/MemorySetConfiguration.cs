using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Munin.Domain.Entities;

namespace Munin.Infrastructure.Persistence.Configurations;

public class TodoListConfiguration : IEntityTypeConfiguration<MemorySet>
{
    public void Configure(EntityTypeBuilder<MemorySet> builder)
    {
        builder.Property(t => t.Title)
            .HasMaxLength(200)
            .IsRequired();
    }
}
