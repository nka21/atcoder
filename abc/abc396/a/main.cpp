#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main()
{
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }

    bool ans = false;
    for (int i = 0; i < n - 2; i++)
    {
        if (a[i] == a[i + 1] && a[i + 1] == a[i + 2])
            ans = true;
    }

    if (ans)
        cout << "Yes" << endl;
    else
        cout << "No" << endl;
}
