using FoodReviewAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;

namespace FoodReviewAPI.Repositories
{
    public class AppUserRepository : IAppUserRepository
    {
        private readonly string _connectionString;

        public AppUserRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("FoodReviewAPIConnection");
        }
        public async Task<IEnumerable<AppUser>> GetAllUsers()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var users = await connection.QueryAsync<AppUser>("SELECT * FROM AppUser");
                return users;
            }
        }
        
    }
}