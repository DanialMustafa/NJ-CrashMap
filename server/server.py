from flask import Flask

app = Flask(__name__)

@app.route("/stations")
def members():
    return {"stations": ["Atlantic City", "Main-Bergen County", "Montclair-Bontoon", "Morris & Essex", "Northeast Corridor",
                         "North Jersey Coast", "Pascack Valley", "Raritan Valley"]}

if __name__ == "__main__":
    app.run(debug=True)