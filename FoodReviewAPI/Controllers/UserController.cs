using Microsoft.AspNetCore.Mvc;

namespace FoodReviewAPI.Controllers
{
    
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserData _userData;

        public UserController(IUserData userData)
        {
            _userData = userData;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            try
            {
                return Ok(await _userData.GetAllUsers());
            }
            catch (Exception e)
            {
                return Problem(e.Message);
            }
        }

        [HttpGet("{Guid id}")]
        public async Task<IActionResult> GetUserById(Guid id)
        {
            try
            {
                var results = await _userData.GetUserById(id);
                return results == null ? NotFound() : Ok(results);
            }
            catch (Exception e)
            {
                return Problem(e.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser(AppUser user)
        {
            try
            {
                await _userData.CreateUser(user);
                return Ok();
            }
            catch (Exception e)
            {
                return Problem(e.Message);
            }
        }

        [HttpPut("{Guid id}")]
        public async Task<IActionResult> UpdateUser(AppUser user)
        {
            try
            {
                await _userData.UpdateUser(user);
                return Ok();
            }
            catch (Exception e)
            {
                return Problem(e.Message);
            }
        }

        [HttpDelete("{Guid id}")]
        public async Task<IActionResult> DeleteUser(Guid id)
        {
            try
            {
                await _userData.DeleteUser(id);
                return Ok();
            }
            catch (Exception e)
            {
                return Problem(e.Message);
            }
        }


        /*      [HttpGet]
             public async Task<IEnumerable<AppUser>> GetAllUsers() =>
                 await _userData.GetAllUsers();
     
             [HttpGet("{Guid id}")]
             public async Task<AppUser?> GetUserById(Guid id) =>
                 await _userData.GetUserById(id);
     
             [HttpPost]
             public  Task CreateUser(AppUser user) =>
                 _userData.CreateUser(user);
             
             [HttpPut("{Guid id}")]
             public Task UpdateUser(AppUser user) =>
                 _userData.UpdateUser(user);
             
             [HttpDelete("{Guid id}")]
             public async Task DeleteUser(Guid id)
             {
                 await _userData.DeleteUser(id);
             }
             
             
            private readonly IAppUserRepository _appUserRepository;
             public UserController(IAppUserRepository appUserRepository)
             {
                 _appUserRepository = appUserRepository;
             }
             [HttpGet]
             public async Task<IEnumerable<AppUser>> GetAllUsers() =>
                 await _appUserRepository.GetAllUsers();
     
             [HttpGet("{Guid id}")]
             public async Task<AppUser?> GetUserById(Guid id) =>
                 await _appUserRepository.GetUserById(id);
     
             [HttpPost]
             public async Task<AppUser> CreateUser(AppUser user) =>
                 await _appUserRepository.CreateUser(user);
             
             [HttpPut("{Guid id}")]
             public async Task<AppUser> UpdateUser(AppUser user) =>
                 await _appUserRepository.UpdateUser(user);
             
             [HttpDelete("{Guid id}")]
             public async Task DeleteUser(Guid id)
             {
                 await _appUserRepository.DeleteUser(id);
             }*/
    }
}