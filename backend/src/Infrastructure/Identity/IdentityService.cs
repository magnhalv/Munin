using Munin.Application.Common.Interfaces;
using Munin.Application.Common.Models;

namespace Munin.Infrastructure.Identity;

public class IdentityService : IIdentityService
{
    public Task<string> GetUserNameAsync(string userId)
    {
        return Task.FromResult("UserTest");
    }

    public Task<bool> IsInRoleAsync(string userId, string role)
    {
        return Task.FromResult(true);
    }

    public Task<bool> AuthorizeAsync(string userId, string policyName)
    {
        return Task.FromResult(true);
    }

    public Task<(Result Result, string UserId)> CreateUserAsync(string userName, string password)
    {
        throw new NotImplementedException();
    }

    public Task<Result> DeleteUserAsync(string userId)
    {
        throw new NotImplementedException();
    }
}