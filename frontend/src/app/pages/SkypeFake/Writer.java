import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.stream.Collectors;


@WebServlet(name = "Writer", urlPatterns = {"/Writer"})
public class Writer extends HttpServlet {
  protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
    res.setContentType("application/json");
    res.setCharacterEncoding("utf-8");
    String in = req.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
    PrintWriter out = res.getWriter();
    try {
      FileWriter myWriter = new FileWriter("user.csv");
      myWriter.write(in);
      myWriter.close();
      out.print("sucessfull");
      out.flush();
    }catch (Exception e){
      e.printStackTrace();
    }
  }
}
