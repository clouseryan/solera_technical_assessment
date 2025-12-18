using Microsoft.Extensions.Logging;
using SoleraTechAssessment.Data.DataAccess.Repositories;

namespace SoleraTechAssessment.Services;

public class CarDataService(CarDataRepository carDataRepository, ILogger<CarDataService> logger)
{
    public async Task TestConnection()
    {
        try
        {
            logger.LogInformation("Testing Connection");
            await carDataRepository.TestConnection();
            logger.LogInformation("Connection Successful");
        }
        catch (Exception e)
        {
            logger.LogError(e, e.Message);
            throw;
        }
    }
}