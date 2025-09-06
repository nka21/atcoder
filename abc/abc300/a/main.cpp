#include <bits/stdc++.h>
using namespace std;

int main()
{
    int N, A, B;
    cin >> N >> A >> B;

    int result = A + B;

    for (int i = 0; i < N; i++) {
        int C;
        cin >> C;

        if (result == C) {
            cout << i + 1 << endl;
            return 0;
        }
    }

    return 0;
}