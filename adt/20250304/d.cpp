#include <bits/stdc++.h>
using namespace std;
using ll = long long;

ll f(string s, ll k)
{
    ll result = 0;
    for (char c : s)
    {
        result = result * k + (c - '0');
    }
    return (result);
}

int main()
{
    ll k;
    string a, b;
    cin >> k >> a >> b;

    ll ka = f(a, k);
    ll kb = f(b, k);

    cout << ka * kb << endl;
}