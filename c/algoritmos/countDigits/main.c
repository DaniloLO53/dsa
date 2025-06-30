// **************************************************************************************

// PROBLEM STATEMENT
// Given an integer N, return the number of digits in N.

// **************************************************************************************

#include <math.h>
#include <stdio.h>

long countDigitsSmart(const long n) {
    // Complexity: O(0)
    return (long) floor(log10((double) n + 1));
}

long countDigits(long n) {
    // 1234 / 10 = 123 (remove 1 digit)
    // 123 / 10 = 12 (remove 2 digit)
    // 12 / 10 = 1 (remove 3 digit)
    // 1 / 10 = 0 (remove 4 digit)
    // The amount of operations is exactly the number of digits of n (d)
    // 10³ <= 1234 <= 10⁴ --> 3 <= log10(1234) <= 4 --> d - 1 <= log10(n) <= d --> log10(n) <= d <= log10(n) + 1 --> d = floor(log10(n) + 1)
    // Complexity: O(log10(n))
    long count = 0;

    while (n != 0) {
        count++;
        n = n / 10;
    }

    return count;
}

int main() {
    const long n1 = 1234567899;
    const long n2 = 1623581628347152735;
    const long n3 = 162358162834715;

    const long result1 = countDigits(n1);
    const long result2 = countDigits(n2);
    const long result3 = countDigitsSmart(n3);

    printf("Number of digits of %ld is: %ld \n", n1, result1);
    printf("Number of digits of %ld is: %ld \n", n2, result2);
    printf("Number of digits of %ld is: %ld \n", n3, result3);
    return 0;
}
