#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main()
{
    string s;
    cin >> s;

    string s_min = s, s_max = s;

    for (int i = 0; i < (int)s.size() - 1; i++)
    {
        string rotated = s.substr(i + 1) + s.substr(0, i + 1);
        s_min = min(s_min, rotated);
        s_max = max(s_max, rotated);
    }

    cout << s_min << endl;
    cout << s_max << endl;
}
