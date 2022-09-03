using Munin.Application.Common.Interfaces;

namespace Munin.Infrastructure.Services;

public class DateTimeService : IDateTime
{
    public DateTime Now => DateTime.Now;
}
