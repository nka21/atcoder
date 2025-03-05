#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main()
{
    int n, q;
    string s;
    cin >> n >> q >> s;

    int p = 0;
    for (int i = 0; i < q; i++)
    {
        int t, x;
        cin >> t >> x;

        if (t == 1)
            p = (p - x + n) % n;
        else
            cout << s[(p + x - 1) % n] << endl;
    }
}
