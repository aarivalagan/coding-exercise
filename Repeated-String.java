import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;
import java.lang.*;

public class Solution {

    // Complete the repeatedString function below.
    static long repeatedString(String s, long n) {
        char str[] = s.toCharArray();
        long count = 0;boolean stringFlag = true;
        //int num = (int)n;
        for(int i=0; i<s.length(); i++){
            if(str[i] == 'a'){
                count++;
            }
            //System.out.println(str);
        }
        //System.out.println(str.toString());
        long factor = n/s.length();
        long rem = n%s.length();
        count = count * factor;
        for(int j=0; j<rem;j++){
            if(s.charAt(j) == 'a'){
                count++;
            }
        }
        return count;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String s = scanner.nextLine();

        long n = scanner.nextLong();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        long result = repeatedString(s, n);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}
