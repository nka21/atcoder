#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main()
{
    int n;
    cin >> n;
    vector<string> s(n);
    for (int i = 0; i < n; i++)
    {
        cin >> s[i];
    }
    vector<pair<int, int>> win(n);
    for (int i = 0; i < n; i++)
    {
        win[i].first = i + 1;
        for (int j = 0; j < n; j++)
        {
            if (s[i][j] == 'o')
                win[i].second++;
        }
    }

    sort(win.begin(), win.end(), [](const pair<int, int> &a, const pair<int, int> &b)
         {
            if (a.second == b.second)
                return (a.first < b.first);
            else
                return (a.second > b.second); });

    for (auto p : win)
    {
        cout << p.first << " ";
    }
}
