/*using System.Data;
using Dapper;
using Npgsql;

namespace FoodReviewAPI.Repositories
{
    public class AppUserRepository : IAppUserRepository
    {
        private readonly string? _connectionString;

        public AppUserRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("Default");
        }

        private IDbConnection Connection => new NpgsqlConnection(_connectionString);

        public async Task<IEnumerable<AppUser>> GetAllUsers()
        {
            using IDbConnection dbConnection = new NpgsqlConnection(_connectionString);
            //using var dbConnection = Connection;
            return await dbConnection.QueryAsync<AppUser>(query_getAll);
        }

        public async Task<AppUser?> GetUserById(Guid id)
        {
            using IDbConnection dbConnection = new NpgsqlConnection(_connectionString);
            return await dbConnection.QueryFirstOrDefaultAsync<AppUser>(
                query_getById,
                new {Id = id});
        }

        public async Task<AppUser> CreateUser(AppUser user)
        {
            using IDbConnection dbConnection = new NpgsqlConnection(_connectionString);
            //using var dbConnection = Connection;
            return await dbConnection.QueryFirstOrDefaultAsync<AppUser>(query_create);
        }

        public async Task<AppUser> UpdateUser(AppUser user)
        {
            using IDbConnection dbConnection = new NpgsqlConnection(_connectionString);
            //using var dbConnection = Connection;
            return await dbConnection.QueryFirstOrDefaultAsync<AppUser>(query_update);
        }

        public async Task DeleteUser(Guid id)
        {
            using IDbConnection dbConnection = new NpgsqlConnection(_connectionString);
            //using var dbConnection = Connection;
            await dbConnection.ExecuteAsync(
                query_delete,
                new {Id = id});
        }

        //Readonly SQL querys
        private const string query_getAll = @"
                            SELECT id, first_name, last_name, email, created_at, updated_at
                            FROM app_user u 
                            ORDER BY u.created_at
                            ";

        private const string query_getById = @"
                                    SELECT id, first_name, last_name, email, created_at, updated_at
                                    FROM app_user
                                    WHERE id = @id
                                    ";

        private readonly string query_create = $@"
                                        INSERT INTO app_user(
                                            id, first_name, last_name, email, app_password, created_at, updated_at)
                                        VALUES({Guid.NewGuid()},
                                               u_first_name,
                                               u_last_name,
                                               u_email, 
                                               u_password,
                                               {DateTime.UtcNow},
                                               {DateTime.UtcNow}
                                               )";

        private readonly string query_update = $@"
                                                UPDATE app_user
                                                SET
                                                    first_name = @first_name,
                                                    last_name = @last_name,
                                                    email = @email,
                                                    password = @password,
                                                    updated_at = {DateTime.UtcNow}
                                                WHERE id = @id
                                                ";

        private readonly string query_delete = "DELETE FROM app_user WHERE id = @id";
    }
}*/