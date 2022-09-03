using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Munin.Application.Common.Interfaces;
using Munin.Application.TodoLists.Queries.GetTodos;
using Munin.Domain.Entities;

namespace Munin.Application.MemorySets.Queries.GetMemorySet;

//[Authorize]
public record GetMemorySetsQuery : IRequest<IEnumerable<MemorySetDto>>;

public class GetMemorySetsQueryHandler : IRequestHandler<GetMemorySetsQuery, IEnumerable<MemorySetDto>>
{
    private readonly IApplicationDbContext _context;
    private readonly IMapper _mapper;

    public GetMemorySetsQueryHandler(IApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async Task<IEnumerable<MemorySetDto>> Handle(GetMemorySetsQuery request, CancellationToken cancellationToken)
    {
        return await _context.MemorySets
                .AsNoTracking()
                .ProjectTo<MemorySetDto>(_mapper.ConfigurationProvider)
                .OrderBy(t => t.Title)
                .ToListAsync(cancellationToken);
    }
}
