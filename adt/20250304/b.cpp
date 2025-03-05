#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main()
{
    string s;
    int a, b;
    cin >> s >> a >> b;

    a--;
    b--;
    char tmp = s[a];
    s[a] = s[b];
    s[b] = tmp;
    cout << s << endl;
}