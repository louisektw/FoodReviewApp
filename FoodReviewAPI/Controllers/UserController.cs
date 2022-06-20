using FoodReviewAPI.Models;
using FoodReviewAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FoodReviewAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase { 
        private readonly IAppUserRepository _appUserRepository;
        public UserController(IAppUserRepository appUserRepository)
        {
            _appUserRepository = appUserRepository;
        }
        [HttpGet]
        public Task<IActionResult<IEnumerable<AppUser>>> GetAllUsers()
        {
            return Ok(_appUserRepository.GetAllUsers());
        }
        [HttpGet("{id}")]
        public Task<IActionResult<AppUser>> GetUserById(int id)
        {
            return Ok(_appUserRepository.GetUserById(id));
        }
        [HttpPost]
        public Task<IActionResult<AppUser>> CreateUser(AppUser user)
        {
            return Ok(_appUserRepository.CreateUser(user));
        }
        [HttpPut("{id}")]
        public Task<IActionResult<AppUser>> UpdateUser(int id, AppUser user)
        {
            return Ok(_appUserRepository.UpdateUser(id, user));
        }
        [HttpDelete("{id}")]
        public Task<IActionResult<AppUser>> DeleteUser(int id)
        {
            return Ok(_appUserRepository.DeleteUser(id));
        }
     }
}
