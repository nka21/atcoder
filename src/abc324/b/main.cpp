#include <bits/stdc++.h>
using namespace std;
using ll = long long;

int main() {
    ll N;
    cin >> N;
    
    while (N % 2 == 0) {
        N /= 2;
    }
    
    while (N % 3 == 0) {
        N /= 3;
    }

    if (N == 1) {
        cout << "Yes" << endl;
    } else {
        cout << "No" << endl;
    }
}