require 'sinatra'
require 'sqlite3'
require 'json'

# Setup SQLite DB
DB = SQLite3::Database.new "expenses.db"
DB.results_as_hash = true

# Create tables if they do not exist
DB.execute <<-SQL
  CREATE TABLE IF NOT EXISTS flight_expenses (
    id INTEGER PRIMARY KEY,
    purchase_date TEXT,
    description TEXT,
    cost_requested REAL,
    vendor TEXT,
    trip_type TEXT,
    departure_location TEXT,
    arrival_location TEXT,
    sp_from TEXT,
    sp_to TEXT,
    claim_id INTEGER
  );
SQL

DB.execute <<-SQL
  CREATE TABLE IF NOT EXISTS lodging_expenses (
    id INTEGER PRIMARY KEY,
    purchase_date TEXT,
    description TEXT,
    cost_requested REAL,
    vendor TEXT,
    sp_from TEXT,
    sp_to TEXT,
    claim_id INTEGER
  );
SQL

DB.execute <<-SQL
  CREATE TABLE IF NOT EXISTS common_carrier_expenses (
    id INTEGER PRIMARY KEY,
    purchase_date TEXT,
    description TEXT,
    cost_requested REAL,
    reason TEXT,
    explanation TEXT,
    type TEXT,
    claim_id INTEGER
  );
SQL

DB.execute <<-SQL
  CREATE TABLE IF NOT EXISTS meal_expenses (
    id INTEGER PRIMARY KEY,
    purchase_date TEXT,
    description TEXT,
    cost_requested REAL,
    vendor TEXT,
    claim_id INTEGER
  );
SQL

DB.execute <<-SQL
  CREATE TABLE IF NOT EXISTS toll_expenses (
    id INTEGER PRIMARY KEY,
    purchase_date TEXT,
    description TEXT,
    cost_requested REAL,
    claim_id INTEGER
  );
SQL

DB.execute <<-SQL
  CREATE TABLE IF NOT EXISTS parking_expenses (
    id INTEGER PRIMARY KEY,
    purchase_date TEXT,
    description TEXT,
    cost_requested REAL,
    claim_id INTEGER
  );
SQL

# New Claims table
DB.execute <<-SQL
  CREATE TABLE IF NOT EXISTS claims (
    id INTEGER PRIMARY KEY,
    claimant_name TEXT,
    created_at TEXT,
    appointment_id INTEGER UNIQUE
  );
SQL

# Updated Plain Ruby Models with inheritance from Expense

class Expense
  attr_accessor :claim_id, :purchase_date, :description, :cost_requested

  def initialize(params)
    @claim_id      = params["claim_id"]
    @purchase_date = params["purchase_date"]
    @description   = params["description"]
    @cost_requested = params["costRequested"]
  end
end

class FlightExpense < Expense
  attr_accessor :vendor, :trip_type, :departure_location, :arrival_location, :sp_from, :sp_to

  def initialize(params)
    super(params)
    @vendor = params["vendor"]
    @trip_type = params["trip_type"]
    @departure_location = params["departure_location"]
    @arrival_location = params["arrival_location"]
    @sp_from = params["from"]    # from Spannable module
    @sp_to = params["to"]        # to Spannable module
  end

  def save
    DB.execute("INSERT INTO flight_expenses (purchase_date, description, cost_requested, vendor, trip_type, departure_location, arrival_location, sp_from, sp_to, claim_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      @purchase_date, @description, @cost_requested, @vendor, @trip_type, @departure_location, @arrival_location, @sp_from, @sp_to, @claim_id)
  end
end

class LodgingExpense < Expense
  attr_accessor :vendor, :sp_from, :sp_to

  def initialize(params)
    super(params)
    @vendor = params["vendor"]
    @sp_from = params["from"]    # from Spannable module
    @sp_to = params["to"]        # to Spannable module
  end

  def save
    DB.execute("INSERT INTO lodging_expenses (purchase_date, description, cost_requested, vendor, sp_from, sp_to, claim_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
      @purchase_date, @description, @cost_requested, @vendor, @sp_from, @sp_to, @claim_id)
  end
end

class CommonCarrierExpense < Expense
  attr_accessor :reason, :explanation, :type

  def initialize(params)
    super(params)
    @reason = params["reason"]
    @explanation = params["explanation"]
    @type = params["type"]
  end

  def save
    DB.execute("INSERT INTO common_carrier_expenses (purchase_date, description, cost_requested, reason, explanation, type, claim_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
      @purchase_date, @description, @cost_requested, @reason, @explanation, @type, @claim_id)
  end
end

class MealExpense < Expense
  attr_accessor :vendor

  def initialize(params)
    super(params)
    @vendor = params["vendor"]
  end

  def save
    DB.execute("INSERT INTO meal_expenses (purchase_date, description, cost_requested, vendor, claim_id) VALUES (?, ?, ?, ?, ?)",
      @purchase_date, @description, @cost_requested, @vendor, @claim_id)
  end
end

class TollExpense < Expense
  def initialize(params)
    super(params)
  end

  def save
    DB.execute("INSERT INTO toll_expenses (purchase_date, description, cost_requested, claim_id) VALUES (?, ?, ?, ?)",
      @purchase_date, @description, @cost_requested, @claim_id)
  end
end

class ParkingExpense < Expense
  def initialize(params)
    super(params)
  end

  def save
    DB.execute("INSERT INTO parking_expenses (purchase_date, description, cost_requested, claim_id) VALUES (?, ?, ?, ?)",
      @purchase_date, @description, @cost_requested, @claim_id)
  end
end

# New Claim PORO model
class Claim
  attr_accessor :id, :claimant_name, :created_at, :appointment_id

  def initialize(params)
    @claimant_name = params["claimant_name"]
    @created_at = params["created_at"] || Time.now.to_s
    @appointment_id = params["appointment_id"]
  end

  def save
    DB.execute("INSERT INTO claims (claimant_name, created_at, appointment_id) VALUES (?, ?, ?)",
      @claimant_name, @created_at, @appointment_id)
    @id = DB.last_insert_row_id
  end
end

# Sinatra Endpoints for POSTing expenses
post '/expenses/flight' do
  data = JSON.parse(request.body.read)
  expense = FlightExpense.new(data.merge(data["purchase_info"]))
  expense.save
  sleep(rand(0.7..1))
  status 201
  { message: "FlightExpense created" }.to_json
end

post '/expenses/lodging' do
  data = JSON.parse(request.body.read)
  expense = LodgingExpense.new(data.merge(data["purchase_info"]))
  expense.save
  sleep(rand(0.7..1))
  status 201
  { message: "LodgingExpense created" }.to_json
end

post '/expenses/common_carrier' do
  data = JSON.parse(request.body.read)
  expense = CommonCarrierExpense.new(data.merge(data["purchase_info"]))
  expense.save
  sleep(rand(0.7..1))
  status 201
  { message: "CommonCarrierExpense created" }.to_json
end

post '/expenses/meal' do
  data = JSON.parse(request.body.read)
  expense = MealExpense.new(data.merge(data["purchase_info"]))
  expense.save
  sleep(rand(0.7..1))
  status 201
  { message: "MealExpense created" }.to_json
end

post '/expenses/toll' do
  data = JSON.parse(request.body.read)
  expense = TollExpense.new(data["purchase_info"].merge("claim_id" => data["claim_id"]))
  expense.save
  sleep(rand(0.7..1))
  status 201
  { message: "TollExpense created" }.to_json
end

post '/expenses/parking' do
  data = JSON.parse(request.body.read)
  expense = ParkingExpense.new(data["purchase_info"].merge("claim_id" => data["claim_id"]))
  expense.save
  sleep(rand(0.7..1))
  status 201
  { message: "ParkingExpense created" }.to_json
end

# New endpoint for creating a claim
post '/claims' do
  data = JSON.parse(request.body.read)
  claim = Claim.new(data)
  claim.save
  status 201
  sleep(rand(1..3))
  { message: "Claim created", id: claim.id }.to_json
end

# New endpoint to get a claim by claim ID along with all its expenses
get '/claims/:id' do
  claim_id = params["id"]
  claim = DB.execute("SELECT * FROM claims WHERE id = ?", claim_id).first
  flight_expenses = DB.execute("SELECT * FROM flight_expenses WHERE claim_id = ?", claim_id)
  lodging_expenses = DB.execute("SELECT * FROM lodging_expenses WHERE claim_id = ?", claim_id)
  common_carrier_expenses = DB.execute("SELECT * FROM common_carrier_expenses WHERE claim_id = ?", claim_id)
  meal_expenses = DB.execute("SELECT * FROM meal_expenses WHERE claim_id = ?", claim_id)
  toll_expenses = DB.execute("SELECT * FROM toll_expenses WHERE claim_id = ?", claim_id)
  parking_expenses = DB.execute("SELECT * FROM parking_expenses WHERE claim_id = ?", claim_id)

  cs = rand(0.5..1.2)
  fs = flight_expenses.size * rand(0.5..1.2)
  ls = lodging_expenses.size * rand(0.5..1.2)
  ccs = common_carrier_expenses.size * rand(0.5..1.2)
  ms = meal_expenses.size * rand(0.5..1.2)
  ts = toll_expenses.size * rand(0.5..1.2)
  ps = parking_expenses.size * rand(0.5..1.2)

  sleep(cs + fs + ls + ccs + ms + ts + ps)

  expenses = {
    flight_expenses: flight_expenses,
    lodging_expenses: lodging_expenses,
    common_carrier_expenses: common_carrier_expenses,
    meal_expenses: meal_expenses,
    toll_expenses: toll_expenses,
    parking_expenses: parking_expenses
  }
  sleep(rand(1..3))
  { claim: claim, expenses: expenses }.to_json
end
# New endpoint to load frontend.html on index
get '/' do
  content_type 'text/html'
  File.read(File.join(File.dirname(__FILE__), 'frontend.html'))
end

# Add migration block to ensure sp_from and sp_to columns exist in flight_expenses and lodging_expenses

begin
  DB.execute("SELECT sp_from FROM flight_expenses LIMIT 1")
rescue SQLite3::SQLException
  DB.execute("ALTER TABLE flight_expenses ADD COLUMN sp_from TEXT")
  DB.execute("ALTER TABLE flight_expenses ADD COLUMN sp_to TEXT")
end

begin
  DB.execute("SELECT sp_from FROM lodging_expenses LIMIT 1")
rescue SQLite3::SQLException
  DB.execute("ALTER TABLE lodging_expenses ADD COLUMN sp_from TEXT")
  DB.execute("ALTER TABLE lodging_expenses ADD COLUMN sp_to TEXT")
end