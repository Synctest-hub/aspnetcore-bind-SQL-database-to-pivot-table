using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Data;
using System.Data.SqlClient;

namespace PivotController.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PivotController : ControllerBase
    {
        [HttpGet(Name = "GetSQLResult")]
        public object Get()
        {
            return JsonConvert.SerializeObject(FetchSQLResult());
        }

        private static DataTable FetchSQLResult()
        {
            string conSTR = @"<Enter your valid connection string here>";
            string xquery = "SELECT * FROM table1";
            SqlConnection sqlConnection = new(conSTR);
            sqlConnection.Open();
            SqlCommand sqlCommand = new(xquery, sqlConnection);
            SqlDataAdapter dataAdapter = new(sqlCommand);
            DataTable dataTable = new();
            dataAdapter.Fill(dataTable);
            return dataTable;
        }
    }
}