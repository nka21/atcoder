#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int recursive_power(int nb, int power)
{
    int s;
    if (power == 0)
        return (1);
    s = recursive_power(nb, power - 1);
    return (nb * s);
}

int main()
{
    int h;
    cin >> h;

    int i = 0, cnt = 0;
    while (i <= h)
    {
        i += (recursive_power(2, cnt));
        cnt++;
    }
    cout << cnt << endl;
}
