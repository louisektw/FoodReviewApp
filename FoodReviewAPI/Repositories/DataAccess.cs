using System.Data;
using Dapper;
using Npgsql;

namespace FoodReviewAPI.Repositories;

public class DataAccess : IDataAccess
{
    private readonly IConfiguration _config;

    public DataAccess(IConfiguration config)
    {
        _config = config;
        //_connectionString = configuration.GetConnectionString("Default");
    }

    public async Task<IEnumerable<T>> LoadData<T, U>(
        string query,
        U parameters,
        string connectionId = "Default")
    {
        using IDbConnection dbConnection = new NpgsqlConnection(_config.GetConnectionString(connectionId));
        return await dbConnection.QueryAsync<T>(query, parameters);
    }

    public async Task SaveData<T>(
        string query,
        T parameters,
        string connectionId = "Default")
    {
        using IDbConnection dbConnection = new NpgsqlConnection(_config.GetConnectionString(connectionId));
        await dbConnection.ExecuteAsync(query, parameters);
    }
}