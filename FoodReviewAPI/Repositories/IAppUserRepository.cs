using FoodReviewAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodReviewAPI.Repositories
{
    public interface IAppUserRepository
    {
        Task<IEnumerable<AppUser>> GetAllUsers();

        Task<AppUser> GetUserById(int id);

        Task<AppUser> CreateUser(AppUser user);

        Task<AppUser> UpdateUser(int id, AppUser user);

        Task<AppUser> DeleteUser(int id);
    }
}
