import java.util.Arrays;

public class SmashWords {

	public static String smash(String... words) {
    if (words == null || words.length == 0) {
            return "";
        }

        return String.join(" ", words);
  }
}
