#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main()
{
    vector<string> s(8);
    for (int i = 0; i < 8; i++)
    {
        cin >> s[i];
    }

    for (int i = 0; i < 8; i++)
    {
        for (int j = 0; j < 8; j++)
        {
            if (s[i][j] == '*')
                cout << char(j + 97) << 8 - i << endl;
        }
    }
}
