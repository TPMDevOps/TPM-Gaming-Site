package TPM.DevOps.Gamingsite.Data;

import com.mysql.cj.jdbc.MysqlDataSource;

import javax.sql.DataSource;


public class DatabaseManager {

    private static final String URL = "jdbc:mysql://localhost:3306/mydatabase";
    private static final String USER = "root";
    private static final String PASSWORD = "Arcangel123!@#";

    public static DataSource getDataSource() {
        MysqlDataSource dataSource = new MysqlDataSource();
        dataSource.setURL(URL);
        dataSource.setUser(USER);
        dataSource.setPassword(PASSWORD);
        return dataSource;
    }
}
