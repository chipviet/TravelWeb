use TravelCaiLolTao
go

create table Role_Users
(
	ID_Role int primary key not null,
	NameRole varchar(max),
)

create table Users
(
	ID_User char(20) primary key not null,
	Name nvarchar(max),
	Username varchar(max),
	Password varchar(max),
	FromTime datetime,
	ToTime datetime,
	ID_Role int foreign key references Role_Users(ID_Role)
)

create table Places
(
	ID_Place char(20) primary key not null,
	NamePlace nvarchar(max),
	Country nvarchar(max),
	ImagePlace varchar(max),
)

create table Hotels
(
	ID_Hotel char(20) primary key not null,
	NameHotel nvarchar(max),
	Quaility int,
	StatusHotel bit,
	PriceHotel int,
	FeedBack nvarchar(max),
	ID_Place char(20) foreign key references Places(ID_Place),
	ImageHotel varchar(max),
)

create table Vehicles
(
	ID_Vehicle char(20) primary key not null,
	NameVehicle varchar(max),
	TypeVehicle varchar(max),
	PriceVehicle int,
	StatusVehicle bit,
	ID_Place char(20) foreign key references Places(ID_Place),
	ImageVehicle varchar(max),
)
create table Orders
(
	ID_Order char(20) primary key not null,
	ID_Hotel char(20) foreign key references Hotels(ID_Hotel) on delete cascade,
	ID_Vehicle char(20) foreign key references Vehicles(ID_Vehicle) on delete cascade,
	ID_User char(20) foreign key references Users(ID_User) on delete cascade
)



--function tính tổng tiền của hóa đơn
create function fn_TotalMoney(@idhotel char(20),@idvehicle char(20))
returns money
as
begin
	declare @p_totalmoney money
	set @p_totalmoney = (select PriceHotel from Hotels where ID_Hotel=@idhotel) + (select PriceVehicle from Vehicles where ID_Vehicle=@idvehicle)
	if @p_totalmoney is null
		set @p_totalmoney=0
	return @p_totalmoney
end
