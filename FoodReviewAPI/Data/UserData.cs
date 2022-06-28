using FoodReviewAPI.Repositories;

namespace FoodReviewAPI.Data;

public class UserData : IUserData
{
    private readonly IDataAccess _db;

    public UserData(IDataAccess db)
    {
        _db = db;
    }

    public Task<IEnumerable<AppUserView>> GetAllUsers() =>
        _db.LoadData<AppUserView, dynamic>(queryGetAll, new { });

    public async Task<AppUserView?> GetUserById(Guid id) =>
        (await _db.LoadData<AppUserView, dynamic>(query_getById, new {Id = id})).FirstOrDefault();

    //Shouldn't pass id??
    public Task CreateUser(AppUser user)

    {
        user.Id = new Guid();
        user.CreatedAt = DateTime.UtcNow;
        user.UpdatedAt = DateTime.UtcNow;
        return _db.SaveData(query_create, user);
    }

    public Task UpdateUser(AppUser user)
    {
        user.UpdatedAt = DateTime.UtcNow;
        return _db.SaveData(query_update, user);
    }

    public Task DeleteUser(Guid id) =>
        _db.SaveData(query_delete, new {Id = id});


    //Readonly SQL querys
    private readonly string queryGetAll =
        @"
        SELECT id, firstname, lastname, email, createdAt, updatedAt
        FROM app_user u 
        ORDER BY u.createdAt
        ";

    private const string query_getById =
        @"
        SELECT id, firstname, lastname, email, createdAt, updatedAt
        FROM app_user
        WHERE id = @Id
        ";


    private readonly string query_create =
        $@"
        INSERT INTO app_user(
            id, firstname, lastname, email, appPassword, createdAt, updatedAt)
        VALUES(
            @Id,
            @FirstName,
            @LastName,
            @Email, 
            @AppPassword,
            @CreatedAt,
            @UpdatedAt
            )";

    private readonly string query_update =
        $@"
        UPDATE app_user
        SET
            firstname = @FirstName,
            lastname = @LastName,
            email = @Email,
            appPassword = @AppPassword,
            updated_at = @UpdatedAt
        WHERE id = @Id
                                                ";

    private readonly string query_delete =
        @"
        DELETE FROM app_user
        WHERE id = @Id";
}

//{DateTime.UtcNow.ToString("YYYY-MM-dd")},
//{DateTime.UtcNow.ToString("YYYY-MM-dd")}