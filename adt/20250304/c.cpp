#include <bits/stdc++.h>
using namespace std;
using ll = long long;

ll my_pow(int n, int power)
{
    if (power == 0)
        return (1);
    return n * my_pow(n, power - 1);
}

int main()
{
    ll x;
    int k;
    cin >> x >> k;

    ll ans = 0;
    for (int i = 0; i <= k; i++)
    {
        ll round_base = my_pow(10, i);
        x = round(x / (double)round_base) * round_base;
    }

    cout << x << endl;
}