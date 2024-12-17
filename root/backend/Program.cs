
namespace BackendAPI
{
    public class Program
    {
        public static void Main(string[] args)


        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            builder.Services.AddCors(options =>
            {
            options.AddDefaultPolicy(policy =>
            {
            policy.WithOrigins("http://192.168.0.95:5173") // URL where your React app runs
                .AllowAnyHeader()
                .AllowAnyMethod();
            });
            });

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseCors(); //ADDED
            

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
