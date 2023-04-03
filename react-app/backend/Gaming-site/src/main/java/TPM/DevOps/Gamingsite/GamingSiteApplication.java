package TPM.DevOps.Gamingsite;

import TPM.DevOps.Gamingsite.Data.DatabaseManager;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

@SpringBootApplication
public class GamingSiteApplication {

	public static void main(String[] args) throws Exception {
		SpringApplication.run(GamingSiteApplication.class, args);
		DataSource dataSource = DatabaseManager.getDataSource();
		Connection connection = dataSource.getConnection();
		PreparedStatement statement = connection.prepareStatement("SELECT * FROM users");
		ResultSet resultSet = statement.executeQuery();
		while (resultSet.next()) {
			String columnValue = resultSet.getString("column_name");
			System.out.println(columnValue);
		}
		resultSet.close();
		statement.close();
		connection.close();


	}

}
