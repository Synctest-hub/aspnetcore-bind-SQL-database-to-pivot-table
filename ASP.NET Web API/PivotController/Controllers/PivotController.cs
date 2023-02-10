using System;
using System.Data.SqlClient;
using System.Data;
using System.Web.Http;
using System.Web.Http.Cors;

namespace PivotController.Controllers
{
    [EnableCors("*", "*", "*")]
    public class PivotController : ApiController
    {
        // GET api/product
        [EnableCors("*", "*", "*")]
        public object Get()
        {
            return Json(FetchSQLResult());
        }

        public DataTable FetchSQLResult()
        {
            string conSTR = @"<Enter your valid connection string here>";
            string xquery = "SELECT * FROM table1";
            SqlConnection sqlConnection = new SqlConnection(conSTR);
            sqlConnection.Open();
            SqlCommand sqlCommand = new SqlCommand(xquery, sqlConnection);
            SqlDataAdapter dataAdapter = new SqlDataAdapter(sqlCommand);
            DataTable dataTable = new DataTable();
            dataAdapter.Fill(dataTable);
            return dataTable;
        }
    }
}
