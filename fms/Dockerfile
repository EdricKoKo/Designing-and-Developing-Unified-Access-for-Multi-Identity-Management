# Use the official .NET SDK image for build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy csproj and restore as distinct layers
COPY WebApp-OpenIDConnect-DotNet.csproj ./
RUN dotnet restore WebApp-OpenIDConnect-DotNet.csproj

# Copy everything else and build
COPY . ./
RUN dotnet publish WebApp-OpenIDConnect-DotNet.csproj -c Release -o /app/publish -f net8.0

# Use the official ASP.NET runtime image for the final stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /app/publish .

# Expose port 8080
EXPOSE 8080

# Set environment variables if needed
# ENV ASPNETCORE_ENVIRONMENT=Production

ENTRYPOINT ["dotnet", "WebApp-OpenIDConnect-DotNet.dll"]
