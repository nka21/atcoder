#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main()
{
    string s;
    cin >> s;

    sort(s.begin(), s.end());
    for (int i = 0; i <= (int)s.size(); i++)
    {
        if (i != (s[i] - '0'))
        {
            cout << i << endl;
            return (0);
        }
    }
}
