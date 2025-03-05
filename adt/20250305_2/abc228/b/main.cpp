#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main()
{
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
        a[i]--;
    }
    x--;

    vector<bool> is_know(n);
    int cur_idx = x, cnt = 0;
    while (!is_know[cur_idx])
    {
        is_know[cur_idx] = true;
        cur_idx = a[cur_idx];
        cnt++;
    }
    cout << cnt << endl;
}
