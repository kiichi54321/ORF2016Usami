using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(UsamiWebApplication.Startup))]
namespace UsamiWebApplication
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
