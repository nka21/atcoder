#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, d;
    string s;
    cin >> n >> d >> s;
    
    int cnt = 0;
    
    for (int i = 0; i < n; i++) {
        if (s[i] == '.') {
            cnt++;
        }
    }
    
    cout << cnt + d << endl;
}