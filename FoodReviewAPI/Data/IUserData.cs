namespace FoodReviewAPI.Data;

public interface IUserData
{
    Task<IEnumerable<AppUserView>> GetAllUsers();
    Task<AppUserView?> GetUserById(Guid id);
    Task CreateUser(AppUser user);
    Task UpdateUser(AppUser user);
    Task DeleteUser(Guid id);
}