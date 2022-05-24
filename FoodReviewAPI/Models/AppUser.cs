namespace FoodReviewAPI.Models
{
    public class AppUser
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public char Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}