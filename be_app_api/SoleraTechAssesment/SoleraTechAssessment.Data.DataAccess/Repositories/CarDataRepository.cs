using System.Data;
using Microsoft.Extensions.Logging;

namespace SoleraTechAssessment.Data.DataAccess.Repositories;

public class CarDataRepository(IDbConnection connection)
{
    public async Task TestConnection()
    {
        connection.Open();
        connection.Close();
    }
}